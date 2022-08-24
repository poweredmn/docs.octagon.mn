import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Announcement.module.scss';

export default function Announcement() {
  // className={"relative my-8 md:my-12 group " + styles.sectionBg}

  return (
    <section className={'relative max-w-full mx-auto '}>
      <div className={'p-2 px-3 sm:p-3 ' + styles.sectionBg}>
        <p className="text-center">
          <span className=" text-white font-medium">
            Angry Red Buha club өөрсдийн discord server-тэй боллоо.
          </span>
          <Link
            className=""
            to="https://discord.gg/YeyYYTvfUK"
            target={'_blank'}
          >
            <span className="ml-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-white hover:bg-blue-500 font-medium text-blue-500 hover:text-white transition-all duration-300">
              JOIN DISCORD
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}
