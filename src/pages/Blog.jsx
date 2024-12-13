import React from 'react';
import Layout from '../layout/Layout';

const Blog = () => {
  return (
    <Layout title="Ayush's Portfolio - Blog Page" description="Blogs page of the Website.">
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-primary">Coming Soon</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Exciting content is on its way! Stay tuned...
          </p>
          <div className="mt-8 animate-bounce">
            <span className="text-3xl">🚀</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;