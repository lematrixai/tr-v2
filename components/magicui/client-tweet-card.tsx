'use client'

import { TweetCard } from "./tweet-card";

export function ClientTweetCard({ id, className }: { id: string; className?: string }) {
  return <TweetCard id={id} className={className} />;
} 