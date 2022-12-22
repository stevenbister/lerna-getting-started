import { Footer } from 'footer'; // Ignore these ts issues for now
import { Header } from 'header';

import { Test } from 'ui/test';
import styles from 'ui/test/dist/main.css'; // Can't import css without doing this?

import { TestTwo } from 'ui/test-2';
import testTwoStyles from 'ui/test-2/dist/main.css'; // Can't import css without doing this?

export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: testTwoStyles },
    ];
  }

export default function Index() {
    return (
        <>
            <Header/>
            <Test />
            <TestTwo />
            <div>
                Content!
            </div>
            <Footer/>
        </>
    );
}
