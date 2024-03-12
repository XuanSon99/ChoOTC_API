<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use stdClass;
use Drnxloc\LaravelHtmlDom\HtmlDomParser;

class RateController extends Controller
{
    public function getPrice(Request $request)
    {
        $param = 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search?tradeType=buy&asset=usdt&fiat=vnd&page=1&rows=20';
        
        $data = [
            'asset' => $request->asset,
            'fiat' => $request->fiat,
            'merchantCheck' => true,
            'page' => $request->page,
            'publisherType' => null,
            'rows' => 20,
            'tradeType' => $request->type,
        ];


        if($request->transAmount){
            $data['transAmount'] = $request->transAmount;
        } 

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->post($param, $data);

        return $response;
    }

    public function getCoinList()
    {
        $param = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        return $response;
    }

    public function getExchange()
    {
        $param = 'https://api.coingecko.com/api/v3/exchanges?per_page=20';

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        return $response;
    }

    public function getBankPrice()
    {
        // $param = 'https://openexchangerates.org/api/latest.json?app_id=754f6dd941404595ae483630201b04cf';
        $param = 'https://portal.vietcombank.com.vn/UserControls/TVPortal.TyGia/pListTyGia.aspx';

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        $dom = new \DOMDocument;
        $dom->loadHTML($response);

        $finder = new \DomXPath($dom);
        $table = $finder->query("//*[contains(@class, 'odd')]");

        $data = array();

        foreach ($table as $tr) {
            $list = new \stdClass();
            $td = $tr->getElementsByTagName('td');
            $list->name = trim($td[0]->nodeValue, " ");
            $list->code = $td[1]->nodeValue;
            $list->buy = $td[2]->nodeValue;
            $list->transfer = $td[3]->nodeValue;
            $list->sell = $td[4]->nodeValue;
            array_push($data, $list);
        }

        return $data;
    }

    public function getGoldPrice()
    {
        $param = 'https://api.rate68.com/api/exchange-rate/gold-price-v2?client_id=2';

        $json = json_decode(file_get_contents($param), true);
        $rate = $json['data'];

        foreach ($rate as $key => $value) {
            if ($value['code'] != 'tg') {
                $rate[$key]['buyingPrice'] =  $value['buyingPrice'] / 1000;
                $rate[$key]['sellingPrice'] =  $value['sellingPrice'] / 1000;
                $rate[$key]['sellChange'] =  $value['sellChange'] / 1000;
                $rate[$key]['buyChange'] =  $value['buyChange'] / 1000;
            }
        }

        $param = 'https://www.24h.com.vn/gia-vang-hom-nay-c425.html';
        $dom = HtmlDomParser::file_get_html($param);

        $data = array();

        foreach ($dom->find('.gia-vang-search-data-table tr') as $value) {
            $list = new \stdClass();
            $td = $value->find('td');
            $list->name = trim($td[0]->text(), " ");
            $list->buy = str_replace(",", "", $td[1]->find('span', 0)->text());
            $list->sell = str_replace(",", "", $td[2]->find('span', 0)->text());
            $list->buy_change = $list->buy - str_replace(",", "", $td[3]->text());
            $list->sell_change = $list->sell - str_replace(",", "", $td[4]->text());

            array_push($data, $list);
        }

        foreach ($rate as $value) {
            if ($value['code'] != 'gold' && $value['code'] != 'change' && $value['code'] != 'dau') {
                $list = new \stdClass();
                $list->name = $value['name'];
                $list->buy = $value['buyingPrice'];
                $list->sell = $value['sellingPrice'];
                $list->buy_change = round($value['sellChange'], 2);
                $list->sell_change = round($value['buyChange'], 2);
                array_push($data, $list);
            }
        }

        $this->moveElement($data, 12, 0);

        return $data;
    }

    public function getStockPrice()
    {
        $param = 'https://www.24h.com.vn/tin-chung-khoan-c566.html';
        $dom = HtmlDomParser::file_get_html($param);

        $data = array();

        foreach ($dom->find('#ckthegioi .row') as $value) {
            $list = new \stdClass();
            $item = $value->find('.item');
            $list->code = $item[0]->find('div', 0)->text();
            $list->name = $item[0]->find('div', 1)->text();
            $list->price = $item[1]->text();
            $list->change = $item[2]->find('span', 0)->text();
            $list->time = trim(str_replace($list->change, "", $item[2]->text()), " ");
            array_push($data, $list);
        }

        return $data;
    }

    public function getMarketForce()
    {
        $param = 'http://taiem.vn/site/strong.html';

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        $dom = new \DOMDocument;
        $html_data  = mb_convert_encoding($response, 'HTML-ENTITIES', 'UTF-8');
        @$dom->loadHTML($html_data);

        $finder = new \DomXPath($dom);
        $table = $finder->query("//*[contains(@class, 'type1')]");

        $data = array();

        $rate = $this->getWorldPrice();

        foreach ($table as $key => $tr) {
            $list = new \stdClass();
            $th = $tr->getElementsByTagName('th');
            $list->name = $th[0]->nodeValue;
            $list->price = $rate[$key]['buy'];
            $list->five_minutes = $th[2]->nodeValue;
            $list->fifteen_minutes = $th[3]->nodeValue;
            $list->one_hour = $th[4]->nodeValue;
            array_push($data, $list);
        }

        return $data;
    }

    public function getNicePrice()
    {
        $param = 'https://api.rate68.com/api/exchange-rate/nice-price';

        $json = json_decode(file_get_contents($param), true);
        return $json;
    }

    public function getWorldPrice()
    {
        $param = 'https://api.rate68.com/api/exchange-rate/list-exchange?page=1&limit=10&sort=DESC&type=fiat_to_fiat&client_id=2';

        $json = json_decode(file_get_contents($param), true);
        $rate = $json['data']['data'];

        $this->moveElement($rate, 1, 0);
        $this->moveElement($rate, 4, 6);

        foreach ($rate as $key => $value) {
            if ($value['from'] == 'USD') {
                $rate[$key]['buy'] = round(1 / $value['buy'], 5);
            }
        }

        return $rate;
    }

    public function getGMO()
    {
        $param = 'https://api.coin.z.com/public/v1/ticker?symbols';

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json'
        ])->get($param);

        return $response;
    }

    function moveElement(&$array, $a, $b)
    {
        $out = array_splice($array, $a, 1);
        array_splice($array, $b, 0, $out);
    }
}
