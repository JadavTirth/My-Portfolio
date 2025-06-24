
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function YouTube() {
  const [loading, setLoading] = useState(true);
  const playlistUrl = "https://youtube.com/playlist?list=PLvnUuqVDwYj4Y_oOWXDVt8PfcC7mOnBRk&si=lTI-EwsVa8adi1nc";
  const embedUrl = "https://www.youtube.com/embed/videoseries?list=PLvnUuqVDwYj4Y_oOWXDVt8PfcC7mOnBRk";

  useEffect(() => {
    // Simulate loading of iframe
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-container ">
      <h2 className="section-title">YouTube Channel</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Check out my YouTube channel where I share tutorials, insights, and updates about Android development.
      </p>
      
      <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        {loading && (
          <Skeleton className="absolute inset-0 bg-gray-200" />
        )}
        <iframe
          className={`w-full h-full ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          src={embedUrl}
          title="YouTube playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>
      
      <div className="text-center mt-6">
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          Visit my YouTube channel for more videos
        </a>
      </div>
    </section>
  );
}
