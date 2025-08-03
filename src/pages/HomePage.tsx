import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ShapeDivider from '../components/ShapeDivider';
import ErrorBoundary from '../components/ErrorBoundary';

// Lazy load components that are below the fold
const Industries = lazy(() => import('../components/Industries'));
const Clients = lazy(() => import('../components/Clients'));
const Stats = lazy(() => import('../components/Stats'));
const Solutions = lazy(() => import('../components/Solutions'));
const Expertise = lazy(() => import('../components/Expertise'));
const Contact = lazy(() => import('../components/Contact'));

const LoadingSpinner = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

export default function HomePage() {
  return (
    <ErrorBoundary>
      <Hero />
      
      <Services />
      <ShapeDivider type="layered" color="#f8fafc" animated={true} />
      
      <div className="bg-slate-50">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Industries />
          </Suspense>
        </ErrorBoundary>
      </div>
      <ShapeDivider type="wave" color="#f8fafc" animated={true} />
      
      <div className="bg-gray-50">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Clients />
          </Suspense>
        </ErrorBoundary>
      </div>
      <ShapeDivider type="gradient-wave" flip={true} />
      
      <div className="bg-emerald-50">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Stats />
          </Suspense>
        </ErrorBoundary>
      </div>
      <ShapeDivider type="layered" color="#ecfdf5" flip={true} animated={true} />
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Solutions />
        </Suspense>
      </ErrorBoundary>
      <ShapeDivider type="wave" color="white" flip={true} animated={true} />
      
      <div className="bg-slate-50">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Expertise />
          </Suspense>
        </ErrorBoundary>
      </div>
      <ShapeDivider type="gradient-wave" flip={true} />
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </ErrorBoundary>
    </ErrorBoundary>
  );
}
