import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline/index';
import clsx from 'clsx';
import data from './faqs.data.json';

const { faqs } = data;

export default function Faqs() {
  return (
    <dl className="space-y-6 divide-y divide-slate-300">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-400">
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDownIcon
                      className={clsx(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base text-slate-500">{faq.answer}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}
