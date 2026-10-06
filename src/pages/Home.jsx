import { AboutPreview } from "../components/sections/AboutPreview";
import { AfterSales } from "../components/sections/AfterSales";
import { BusinessAreas } from "../components/sections/BusinessAreas";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { HomeIntroduction } from "../components/sections/HomeIntroduction";
import { SentinelFeature } from "../components/sections/SentinelFeature";

export function Home() {
  return <main><Hero /><HomeIntroduction /><BusinessAreas /><SentinelFeature /><AfterSales compact /><AboutPreview /><Contact /></main>;
}
