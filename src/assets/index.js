// Imported (not in /public) so Vite fingerprints them for long-term caching.
export { default as logo } from './tutorings-logo.jpeg';
export { default as englishDoodle } from './english-doodle.png';
export { default as idpIelts } from './idp-ielts.png';
export { default as idpRoom } from './idp-room.jpg';
export { default as cambridgePress } from './cambridge-press.png';
export { default as cambridgeOne } from './cambridge-one.png';
export { default as cambridgeLibrary } from './cambridge-library.jpg';
export { default as oxford } from './oxford.jpg';
export { default as monshaat } from './monshaat.jpg';
export { default as misk } from './misk.png';
export { default as team } from './team.jpg';
export { default as cefrOutcomes } from './cefr-outcomes.jpg';
export { default as cefrIllustration } from './cefr-english-illustration.jpg';
export { default as cefrMobile } from './cefr-mobile-learning.jpeg';
export { default as timingProgress } from './timing-progress.svg';
export { default as trustpilot } from './trustpilot.jpg';

// Hero is the LCP element: ship a srcset so phones don't fetch the 1400px file.
export { default as heroStudents } from './hero-students.jpg';
import hero480 from './hero-students-480.jpg';
import hero800 from './hero-students-800.jpg';
import hero1200 from './hero-students-1200.jpg';
import hero1400 from './hero-students.jpg';

export const heroSrcSet = [
  `${hero480} 480w`,
  `${hero800} 800w`,
  `${hero1200} 1200w`,
  `${hero1400} 1400w`,
].join(', ');

/** Hero fills the viewport on phones, ~48% of a 1140px shell on desktop. */
export const heroSizes = '(min-width: 980px) 550px, 100vw';
