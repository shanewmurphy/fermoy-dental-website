"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
const faqsTreatmentsData = [
  {
    id: "01",
    Question: "What is the difference between a filling and a crown?",
    Answer:
      "It's recommended to schedule an appointment to ensure prompt attention, but we do accommodate walk-ins for emergency only.",
  },
  {
    id: "02",
    Question: "What is the difference between a root canal and an extraction?",
    Answer:
      "A root canal is a procedure that removes the infected or damaged pulp from the inside of a tooth, while an extraction is a procedure that removes the entire tooth. Root canals are typically performed to save a tooth that has been infected or damaged, while extractions are typically performed when a tooth cannot be saved.",
  },
  {
    id: "03",
    Question: "What are dental implants?",
    Answer:
      "Dental implants are artificial tooth roots that are surgically placed in the jawbone to replace missing teeth. They are made of titanium, a biocompatible metal that fuses with the jawbone over time. Once the implant has fused with the jawbone, a crown is attached to the implant to replace the missing tooth.",
  },
  {
    id: "04",
    Question: "What is the best way to take care of my teeth and gums?",
    Answer:
      "The best way to take care of your teeth and gums is to brush your teeth twice a day for two minutes each time with a fluoride toothpaste and floss once a day. You should also see your dentist for regular checkups and cleanings.",
  },
  {
    id: "05",
    Question: "How long do I have to wear braces?",
    Answer:
      "The amount of time you need to wear braces will vary depending on the severity of your malocclusion. However, most people wear braces for one to three years.",
  },
  {
    id: "06",
    Question: "Will braces hurt?",
    Answer:
      "You may experience some discomfort for a few days after your braces are first put on or after they are tightened. However, this discomfort is usually mild and can be relieved with over-the-counter pain relievers",
  },
  {
    id: "07",
    Question: "How does Invisalign work?",
    Answer:
      "Invisalign uses a series of clear plastic aligners to gradually move your teeth into the desired position. Each aligner is worn for two weeks before being replaced with the next aligner in the series.",
  },
  {
    id: "08",
    Question: "Is Invisalign better than braces?",
    Answer:
      "Invisalign and braces are both effective ways to correct malocclusions. However, Invisalign has some advantages over braces, such as being more discreet and removable. However, Invisalign is not suitable for everyone, and some people may require braces to correct their malocclusion.",
  },
  {
    id: "09",
    Question: "How long does it take to get dental implants?",
    Answer:
      "The dental implant process typically takes several months to complete. First, the implant is surgically placed in the jawbone. Once the implant has fused with the jawbone, a crown is attached to the implant.",
  },
];

function FAQTreatments() {
  return (
    <div className="FAQ-Treatments">
      <h3 className="text-center font-bold">Common Treatments FAQs</h3>
      <div className="lg:w-7/12 md:w-7/12 sm:w-11/12 mx-auto rounded-2xl p-2">
        {faqsTreatmentsData.map((faq) => (
          <Disclosure as="div" className="mt-4" key={faq.id}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex w-full justify-between rounded-lg bg-white px-6 py-3 text-left 
                      font-semibold text-text-cyan-950  focus:outline-none focus-visible:ring 
                      focus-visible:ring-cyan-950"
                >
                  <p className="text-sm text-cyan-950 font-semibold antialiased">
                    {faq.Question}
                  </p>
                  <div>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-6 w-6 text-cyan-950`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm font-medium text-cyan-950">
                  {faq.Answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default FAQTreatments;
