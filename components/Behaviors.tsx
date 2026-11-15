'use client';
import { useEffect } from 'react';
import { initApartment, initCommon, initListing, initPages } from '@/lib/site';

type Page = 'common' | 'home' | 'listing' | 'apartment' | 'pages';

/** Runs the interactive layer (facades, filters, sun simulator, map, calculator) once per page load. */
export default function Behaviors({ page }: { page: Page }) {
  useEffect(() => {
    initCommon();
    if (page === 'listing') initListing();
    if (page === 'apartment') initApartment();
    if (page === 'pages') initPages();
  }, [page]);
  return null;
}
