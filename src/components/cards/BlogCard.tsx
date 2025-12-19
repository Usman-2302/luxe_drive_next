"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.id}`}>
        <motion.article
          whileHover={{ y: -8 }}
          className={cn(
            "group overflow-hidden rounded-2xl glass",
            "border border-border/50 hover:border-[hsl(var(--silver))]/30",
            "transition-all duration-300 card-glow"
          )}
        >
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[hsl(var(--silver))]/20 text-[hsl(var(--silver))] backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime} read
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2 font-['Playfair_Display'] line-clamp-2 group-hover:text-gradient transition-all">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {post.excerpt}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--silver))] group-hover:text-foreground transition-colors">
              Read More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}