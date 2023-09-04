import React from "react";
import "./style.scss";
import Section from "../shared/section/Section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blogCard/BlogCard";

function Blogs() {
  return (
    <Section id="blogs" title="Blogs & Articles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard
          user="Jamie Juviler"
          date="Aug 28 2023"
          image={Blog1}
          title="How to Start Coding: The Ultimate Guide for Beginner Programmers"
          discription="Coding is one of the most valuable skills you can build, and in this post you'll learn about how to start learning. If you’re searching for “how to learn coding,” it might be because you want to advance your career or develop other skills in the computer programming world." 
          
          read="https://blog.hubspot.com/website/how-to-start-coding?hubs_content=blog.hubspot.com%252Fwebsite%252Fwebsite-development&hubs_content-cta=null&hubs_post-cta=blognavcard-website"
        
        />
        <BlogCard
          user=" Andrew Clark"
          date="June 15, 2022"
          image={Blog2}
          title="React Labs: What We've Been Working On"
          discription="React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths."
          read="https://legacy.reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html"
        />
        <BlogCard
          user="Feb 18, 2022"
          date="Kayla Mackie"
          image={Blog3}
          title="SEO vs SEM: What’s the Difference (and Which is Better)?"
          discription="When you plan your marketing budget, your primary goal is to deliver the strongest growth for the lowest cost. "
          read="https://terakeet.com/blog/seo-vs-sem/"
        />
      </div>
    </Section>
  );
}

export default Blogs;
