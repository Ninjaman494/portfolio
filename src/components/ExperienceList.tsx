import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import cards from "../cards";
import Card from "./Card";
import Tag from "./Tag";

export default function ExperienceList() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const experiences = !selectedTags.length
    ? cards
    : cards.filter(({ tags }) => !selectedTags.some((t) => !tags.includes(t)));

  const remainingTags = [
    ...experiences.reduce(
      (prev, { tags }) => new Set([...prev, ...tags]),
      new Set<string>()
    ),
  ].filter((tag) => !selectedTags.includes(tag));

  const timeout = 500;
  const classNames = {
    enter: "opacity-0",
    enterActive: "opacity-100",
    exit: "opacity-100",
    exitDone: "opacity-0",
  };

  return (
    <>
      <TransitionGroup className="flex flex-row gap-2 -mr-3 pr-3 overflow-x-auto">
        {selectedTags.length > 0 && (
          <CSSTransition
            classNames={classNames}
            timeout={timeout}
            addEndListener={() => {}}
          >
            <button
              className="transition-opacity ease-in-out bg-gray-400 px-1 py-1 rounded-full text-sm text-gray-50 whitespace-nowrap"
              onClick={() => setSelectedTags([])}
            >
              {/* X icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="18"
                height="18"
                fill="white"
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </button>
          </CSSTransition>
        )}
        {[...selectedTags].map((tag) => (
          <CSSTransition
            key={tag + "-s"}
            classNames={classNames}
            timeout={timeout}
            addEndListener={() => {}}
          >
            <Tag
              active
              onClick={() =>
                setSelectedTags(selectedTags.filter((val) => val !== tag))
              }
            >
              {tag}
            </Tag>
          </CSSTransition>
        ))}
        {remainingTags.map((tag) => (
          <CSSTransition
            key={tag + "-r"}
            classNames={classNames}
            timeout={timeout}
            addEndListener={() => {}}
          >
            <Tag onClick={() => setSelectedTags([...selectedTags, tag])}>
              {tag}
            </Tag>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="pt-4 flex flex-col gap-4">
        {experiences.map((c) => (
          <Card key={c.title} card={c} />
        ))}
      </div>
    </>
  );
}
