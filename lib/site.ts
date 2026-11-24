/**
 * Site-wide settings. Override any of these in Vercel → Settings → Environment
 * Variables, then redeploy.
 */
export const site = {
  name: 'Kairos',
  tagline: 'Redeem the time',
  description:
    'Kairos is a Christian prayer app: set your prayer hours, keep a timed altar, meditate on Scripture and the words of great preachers, journal what God speaks, and follow guided fasts.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://kairos-app-website.vercel.app').replace(/\/$/, ''),
  playUrl: 'https://play.google.com/store/apps/details?id=com.olateju.kairos',
  apkUrl:
    process.env.NEXT_PUBLIC_APK_URL ||
    'https://github.com/tejHacks/kairos-app-website/releases/latest/download/Kairos.apk',
  /** Shown on the Support and Privacy pages. Leave unset to hide the email line. */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  developer: 'Olateju Olamide Emmanuel',
  version: '1.1.0',
}
