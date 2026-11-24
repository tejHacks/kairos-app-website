import type { Metadata } from 'next'
import Link from 'next/link'
import { ProsePage } from '@/components/prose-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What Kairos stores, what it sends, and how to delete your data.',
  alternates: { canonical: '/privacy' },
}

const contact = site.contactEmail ? (
  <>email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></>
) : (
  <>use the developer contact on the <a href={site.playUrl}>Google Play listing</a></>
)

export default function PrivacyPage() {
  return (
    <ProsePage
      eyebrow="Privacy Policy"
      title="Your prayers stay on your phone"
      intro={<p className="text-sm">Last updated: 24 November 2026 · Applies to Kairos {site.version} and later</p>}
      sections={[
        {
          title: 'The short version',
          body: [
            'Kairos has no accounts, no ads and no analytics trackers. Everything you write or set up in the app is saved only on your device. The one thing that leaves your phone is an anonymous crash report if the app breaks, so we can fix it.',
          ],
        },
        {
          title: 'What is stored on your device',
          body: [
            <ul key="l">
              <li>Your prayer hours and reminder settings</li>
              <li>Your Scribe journal entries and their tags</li>
              <li>Your current fast and its progress</li>
              <li>Your theme choice and whether you have finished the welcome screens</li>
            </ul>,
            'This data lives in the app’s private storage. We cannot see it, and it is not uploaded or backed up to any Kairos server, because there is none.',
          ],
        },
        {
          title: 'Crash reports',
          body: [
            'Kairos uses Firebase Crashlytics, a Google service, to tell us when the app crashes or hits an error. A crash report contains technical details only: the error and where in the code it happened, your device model, Android or iOS version, app version, free memory and disk space, the time of the crash, and a random installation ID that is not linked to your name, email or phone number.',
            'Crash reports never include your journal entries, prayer times or anything else you type. Crashlytics keeps reports for 90 days. You can read Google’s terms in the Firebase privacy and security page.',
          ],
        },
        {
          title: 'Notifications',
          body: [
            'If you allow notifications, Kairos schedules your prayer reminders on your device. They are not sent from a server. You can turn them off at any time in the app or in your phone’s settings.',
          ],
        },
        {
          title: 'Sharing and links',
          body: [
            'When you export a journal entry as a PDF, Kairos hands the file to the app you pick (for example email or WhatsApp). What happens next is governed by that app. Links in Kairos to other services, such as WhatsApp, Ko-fi or Google Play, open those services, which have their own privacy policies.',
          ],
        },
        {
          title: 'What we do not do',
          body: [
            'We do not sell or share personal data, show ads, track you across apps or websites, ask for your location, contacts, camera or microphone, or require you to sign in.',
          ],
        },
        {
          title: 'Deleting your data',
          body: [
            'You are in control. Delete a journal entry by long-pressing it in Scribe. To remove everything Kairos has stored, clear the app’s storage in your phone’s settings, or uninstall the app. Crash reports expire on their own after 90 days; if you want them removed sooner, contact us with the approximate date of the crash.',
          ],
        },
        {
          title: 'Children',
          body: [
            'Kairos is made for a general audience and is not directed at children under 13. It does not knowingly collect personal information from anyone.',
          ],
        },
        {
          title: 'Changes to this policy',
          body: [
            'If Kairos starts handling data differently, we will update this page and the date at the top before the change ships.',
          ],
        },
        {
          title: 'Contact',
          body: [
            <p key="c">
              Kairos is made by {site.developer}. For any privacy question, {contact}. See also the{' '}
              <Link href="/support">Support page</Link>.
            </p>,
          ],
        },
      ]}
    />
  )
}
