import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
  });

  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        setMetrics(prev => ({
          ...prev,
          loadTime: navigation.loadEventEnd - navigation.fetchStart,
          timeToInteractive: navigation.domInteractive - navigation.fetchStart
        }));

        // Measure FCP
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({
            ...prev,
            firstContentfulPaint: fcpEntry.startTime
          }));
        }

        // Use PerformanceObserver for other metrics
        if ('PerformanceObserver' in window) {
          // LCP Observer
          try {
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              setMetrics(prev => ({
                ...prev,
                largestContentfulPaint: lastEntry.startTime
              }));
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // CLS Observer
            const clsObserver = new PerformanceObserver((list) => {
              let clsValue = 0;
              for (const entry of list.getEntries()) {
                if (!(entry as any).hadRecentInput) {
                  clsValue += (entry as any).value;
                }
              }
              setMetrics(prev => ({
                ...prev,
                cumulativeLayoutShift: clsValue
              }));
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });

            // FID Observer
            const fidObserver = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                setMetrics(prev => ({
                  ...prev,
                  firstInputDelay: (entry as any).processingStart - entry.startTime
                }));
              }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
          } catch (error) {
            console.warn('Performance Observer not fully supported:', error);
          }
        }
      }
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return metrics;
};

// Optimized Image Component with WebP support
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const imgElement = document.querySelector(`[data-src="${src}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Generate WebP and fallback sources
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');

  return (
    <div className={`relative overflow-hidden ${className}`} data-src={src}>
      {isInView && !hasError && (
        <picture>
          <source srcSet={avifSrc} type="image/avif" />
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      )}
      
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <motion.div 
            className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
      
      {/* Error placeholder */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image not available</div>
          </div>
        </div>
      )}
    </div>
  );
};

// Critical CSS inliner (for above-the-fold content)
export const CriticalCSS: React.FC = () => {
  useEffect(() => {
    // Inline critical CSS for faster initial render
    const criticalCSS = `
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
      }
      
      @media (max-width: 768px) {
        .hero-section {
          min-height: 80vh;
          padding-top: 6rem;
        }
        
        .container-custom {
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

// Resource preloader
export const ResourcePreloader: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/fonts/montserrat-var.woff2'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('.woff') ? 'font' : 'image';
      if (resource.includes('.woff')) {
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

// Performance monitoring component
export const PerformanceMonitor: React.FC = () => {
  const metrics = usePerformanceMonitoring();
  
  // Only show in development
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-3 rounded-lg text-xs font-mono max-w-xs">
      <div className="mb-2 font-bold">Performance Metrics</div>
      <div>Load: {(metrics.loadTime / 1000).toFixed(2)}s</div>
      <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
      <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
      <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
      <div>FID: {metrics.firstInputDelay.toFixed(0)}ms</div>
      <div>TTI: {(metrics.timeToInteractive / 1000).toFixed(2)}s</div>
    </div>
  );
};