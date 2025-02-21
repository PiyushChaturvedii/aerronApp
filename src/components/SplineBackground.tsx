
'use client'

import { useMemo } from 'react';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineBackground() {
  const MemoizedSplineScene = useMemo(() => (
    <SplineScene 
      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
      className="w-full h-full opacity-80"
    />
  ), []);

  return (
    <div className="fixed inset-0 w-full h-full -z-[100]">
      <Card className="w-full h-full bg-gradient-to-br from-dark/95 via-dark/90 to-dark/95 border-0">
        <Spotlight
          className="-top-40 right-0 md:right-60 md:-top-20"
          fill="#D6BCFA"
          size={500}
        />
        
        <div className="absolute inset-0 flex justify-end">
          <div className="w-full md:w-2/3 h-full transform translate-x-1/4">
            {MemoizedSplineScene}
          </div>
        </div>
      </Card>
    </div>
  );
}
