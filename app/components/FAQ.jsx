"use client";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function FAQ() {
  const faqsData = [
    {
      id: "01",
      Question: "How to schedule an appointment, or do you accept walk-ins?",
      Answer:
        "It's recommended to schedule an appointment to ensure prompt attention, but we do accommodate walk-ins for emergency only.",
    },
    {
      id: "02",
      Question: "What should I do in case of a dental emergency?",
      Answer:
        "Contact our office immediately in case of a dental emergency. We strive to provide prompt care for urgent situations.",
    },
    {
      id: "03",
      Question: "Can you help with cosmetic dentistry?",
      Answer:
        "Yes, we offer a range of cosmetic dentistry services, including, dental implants, teeth whitening, veneers, and smile makeovers. Schedule a consultation for personalised recommendations.",
    },
    {
      id: "04",
      Question: "Do you offer orthodontic services?",
      Answer:
        "Yes, we offer orthodontic services. We provide traditional braces as well as Invisalign clear aligners for a more discreet option",
    },
    {
      id: "05",
      Question: "What age should my child have their first dental visit?",
      Answer:
        "Recommends a child's first dental visit by their first birthday or when their first tooth appears.",
    },
    {
      id: "06",
      Question: "What is teeth whitening and how long does it last?",
      Answer:
        "Teeth whitening is a procedure that is used to remove stains from teeth. Teeth whitening can be done in the dentist's office or at home. The results of teeth whitening can last for several months to a year, depending on your diet and lifestyle habits.",
    },
  ];
  const mappedFaqData = faqsData.map((faq) => {
    return {
      id: faq.id,
      question: faq.Question,
      answer: faq.Answer,
    };
  });
  return (
    <div>
      <div className="w-screen py-32 bg-lightBrown antialiased">
        <div className="w-full px-4 pt-16">
          <div>
            <h2 className="text-center font-bold text-cyan-950">Common FAQs</h2>
          </div>
          <div className="mx-auto lg:w-8/12 rounded-2xl p-2">
            <div>
              {mappedFaqData.map((faq) => (
                <Disclosure as="div" className="mt-4" key={faq.id}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className="flex w-full justify-between rounded-lg bg-white lg:px-6 lg:py-3 md:px-6 md:py-6 sm:py-4 sm:px-4 text-left 
                      font-semibold text-cyan-950 focus:outline-none focus-visible:ring 
                      focus-visible:ring-cyan-950"
                      >
                        <h6 className="text-cyan-950 font-semibold">
                          {faq.question}
                        </h6>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-6 w-6  text-cyan-950`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2">
                        <p className="text-sm font-medium text-cyan-950">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
