
/*
 * This file makes an object class for blog posts that will have different display methods for different types of posts.
 * Assignment: Add a third type of blog post: AnnouncementPost. Have this be text inside an h1 tag so the text is very big. Add a section to posts.js that uses this new type.
 */

class BlogPost {
    title;
    content;

    constructor(definition)
    {
        this.title = definition.title;
        this.content = definition.content;
    }

    drawContent(element)
    {
        var titleTag = document.createElement("div");
        titleTag.innerText = this.title;
        element.appendChild(titleTag);

        var contentTag = document.createElement("div");
        contentTag.innerText = this.content;
        element.appendChild(contentTag);

        element.appendChild(document.createElement("hr"));
    }
    static createPost(definition)
    {
        if(definition.type === "text")
        {
            return new BlogPost(definition);
        }
        else if(definition.type === "image")
        {
            return new ImagePost(definition);
        }
    }
}


class ImagePost extends BlogPost
{
    drawContent(element)
    {
        var titleTag = document.createElement("div");
        titleTag.innerText = this.title;
        element.appendChild(titleTag);

        var contentTag = document.createElement("img");
        contentTag.src = this.content;
        contentTag.width = 500;
        element.appendChild(contentTag);

        element.appendChild(document.createElement("hr"));
    }   
}
var display = document.getElementById("display");
posts.forEach(postDefinition => {
    var post = BlogPost.createPost(postDefinition);
    console.log(post.title);
    post.drawContent(display)
});

