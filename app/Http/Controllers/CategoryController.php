<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Category::orderBy('created_at', 'DESC')->get();
        // $data = array();
        // foreach ($cate_list as $cate) {
        //     $list = new \stdClass();
        //     $parent = Category::find($cate->parent_id);
        //     if (!is_null($parent)) {
        //         $list->parent_slug = $parent->slug;
        //         $list->id = $cate->id;
        //         $list->name = $cate->name;
        //         $list->slug = $cate->slug;
        //         $list->created_at = $cate->created_at;
        //         array_push($data, $list);
        //     }
        // }
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $Category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $Category, Request $request)
    {
        $posts = Post::where('category_id', $Category->id)->orderBy('created_at', 'DESC')->paginate(6);
        $data = array();
        foreach ($posts as $post) {
            $list = new \stdClass();

            $author = User::find($post->author_id);
            if (!is_null($author)) $list->author = $author->name;

            $cate = Category::find($post->category_id);
            if (!is_null($cate)) $list->cate_name = $cate->name;

            $list->created_at = $post->created_at;
            $list->image = $post->image;
            $list->slug = $post->slug;
            $list->title = $post->title;
            array_push($data, $list);
        }
        return response()->json(["status" => true, "data" =>  $data, "total" => Post::where('category_id', $Category->id)->count()], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $Category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $Category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $Category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $Category)
    {
        //
    }
}
