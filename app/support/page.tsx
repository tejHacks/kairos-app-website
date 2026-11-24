import type { Metadata } from 'next'
import Link from 'next/link'
import { ProsePage } from '@/components/prose-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help with Kairos: reminders, the journal, fasting, and how to get in touch.',
  alternates: { canonical: '/support' },
}

export default function SupportPage() {
  return (
    <ProsePage
      eyebrow="Support"
      title="How can we help?"
      intro={<p>Answers to the questions people ask most. Still stuck? Get in touch at the bottom of this page.</p>}
      sections={[
        {
          title: 'My prayer reminders are not showing',
          body: [
            'Open your phone’s Settings, go to Apps, then Kairos, then Notifications, and make sure they are allowed. Some phones also stop apps in the background to save battery: set Kairos’s battery use to “Unrestricted” so reminders arrive on time.',
          ],
        },
        {
          title: 'How do I add or change a prayer hour?',
          body: [
            'Go to Plan and tap the gold “Add Prayer Time” button. Choose a quick preset such as Dawn or Night, or set your own time. Tap an existing prayer hour to edit it or switch it off.',
          ],
        },
        {
          title: 'Is my journal backed up?',
          body: [
            'Scribe entries are saved only on your phone, which keeps them private. To keep a copy, long-press an entry and export it as a PDF. Uninstalling the app or clearing its storage deletes your entries.',
          ],
        },
        {
          title: 'Where do the Daily Wisdom quotes come from?',
          body: [
            'Every quote is taken word for word from a published book, sermon or journal, and Kairos shows the source under each one. If you spot a mistake, tell us and we will correct it.',
          ],
        },
        {
          title: 'Do I need an account?',
          body: ['No. Kairos works without sign-up, and it works offline.'],
        },
        {
          title: 'How do I delete my data?',
          body: [
            <p key="d">
              Clear Kairos’s storage in your phone’s settings, or uninstall the app. The{' '}
              <Link href="/privacy#deleting-your-data">Privacy Policy</Link> explains exactly what is stored.
            </p>,
          ],
        },
        {
          title: 'Contact',
          body: [
            site.contactEmail ? (
              <p key="e">
                Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> with your phone model and
                what happened, and we will reply as soon as we can.
              </p>
            ) : (
              <p key="e">
                Use the developer contact on the <a href={site.playUrl}>Google Play listing</a>, or leave a review there.
              </p>
            ),
          ],
        },
      ]}
    />
  )
}
