import { useState } from "react"

import dataFaq from "../faq.json"
const Accordion = () => {
  const [isOpen, setIsOpen] = useState(Array(dataFaq.length).fill(false))
  function handleClick({ currentTarget }) {
    const { id } = currentTarget
    console.log(id)
    setIsOpen((prevIsOpen) =>
      prevIsOpen.map((question, index) => {
        if (index === Number(id)) {
          return (question = !prevIsOpen[index])
        } else {
          return question
        }
      })
    )
  }
  console.log(isOpen)
  return (
    <section
      className="flex-1 flex flex-col p-8
   lg:px-20 lg:py-12 w-full gap-y-6 text-sm  overflow-y-auto max-h-[412px] lg:max-h-[480px] lg:w-[60%]  "
    >
      <h1 className="text-center text-3xl font-bold tracking-wide lg:text-left">
        FAQ
      </h1>
      {dataFaq.map((question, index) => (
        <article
          id={index}
          onClick={handleClick}
          key={`question-${index}`}
          className="cursor-pointer flex flex-col gap-y-2"
        >
          <div className="flex items-center">
            <h4
              className={`${
                isOpen[index] ? "text-gray-950 font-semibold" : ""
              } flex-1 text-gray-600 hover:text-orange-600`}
            >
              {question.question}
            </h4>
            {isOpen[index] ? (
              <i className="fa-solid fa-angle-up text-orange-500"></i>
            ) : (
              <i
                // id={index}
                // onClick={handleClick}
                className="fa-solid fa-angle-down cursor-pointer text-orange-500"
              ></i>
            )}
          </div>
          <p className={`${isOpen[index] ? "" : "hidden"} text-gray-500`}>
            {question.answer}
          </p>
          <hr />
        </article>
      ))}
    </section>
  )
}
export default Accordion
