import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../../components/Navbar';
import Footer from '../../../components/Footer';

// Ensure these files exist and default-export a React component.
// Do NOT use { ssr: false } here because this file is a Server Component (App Router page).
const COMPONENT_MAP = {
  'web-dev': dynamic(() => import('../../components/developers/web-dev')),
  'blockchain': dynamic(() => import('../../components/developers/Blockchain')),
  'uiux': dynamic(() => import('../../components/developers/ui')),
  'kotlin': dynamic(() => import('../../components/developers/kotlin')),
  'flutter': dynamic(() => import('../../components/developers/flutter')),
  'ai': dynamic(() => import('../../components/developers/AI'))
};

const sharedMainBase = {
  // No black overlay or opacity applied here. The background image will be rendered
  // as a positioned <img /> in the components so it stays pure and can be rotated.
  color: '#fff',
  minHeight: '80vh',
  position: 'relative', // required so the absolutely positioned bg <img /> sits behind content
  overflow: 'hidden'
};

export default async function TeamPage({ params }) {
  // Await params before using its properties (required by Next.js App Router)
  const awaited = await params;
  const { team } = awaited || {};

  // If team is missing, show a fallback message
  if (!team) {
    return (
      <>
        <Navbar />
        <main style={{ ...sharedMainBase, padding: 48 }}>
          {/* Background image intentionally not added here; developer pages/components add the rotated image */}
          <h2 style={{ textAlign: 'center' }}>Team not specified</h2>
          <p style={{ textAlign: 'center' }}>No team slug was provided in the route.</p>
        </main>
        <Footer />
      </>
    );
  }

  const TeamComponent = COMPONENT_MAP[team];

  // If no component mapped for this team, show helpful diagnostics (avoid immediate notFound while debugging)
  if (!TeamComponent) {
    return (
      <>
        <Navbar />
        <main style={{ ...sharedMainBase, padding: 48 }}>
          <h2 style={{ textAlign: 'center' }}>Team: {team}</h2>
          <p style={{ textAlign: 'center' }}>
            No component found for this team. Check COMPONENT_MAP keys and paths under components/developers.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main style={sharedMainBase}>
        <Suspense fallback={<div style={{ padding: 40, color: '#fff' }}>Loading...</div>}>
          <TeamComponent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}