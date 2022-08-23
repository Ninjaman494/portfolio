import { useState } from "react";
import FlipMove from "react-flip-move";
import cards from "../cards";
import Card from "./Card";
import Tag from "./Tag";

const defaultList = ["JavaScript", "Python", "Android", "React Native"];

export default function ExperienceList() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const experiences = !selectedTags.length
    ? cards
    : cards.filter(({ tags }) => !selectedTags.some((t) => !tags.includes(t)));

  const remainingTags = !selectedTags.length
    ? defaultList
    : [
        ...experiences.reduce(
          (prev, { tags }) => new Set([...prev, ...tags]),
          new Set<string>()
        ),
      ].filter((tag) => !selectedTags.includes(tag));

  return (
    <>
      {/** @ts-ignore outdated prop type doesn't include children */}
      <FlipMove className="flex flex-row gap-2 -mx-3 py-1 px-3 overflow-x-auto">
        {!!selectedTags.length && (
          <Tag active onClick={() => setSelectedTags([])}>
            {/* X icon */}
            <svg
              className="fill-gray-50 group-hover:fill-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="18"
              height="18"
            >
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
          </Tag>
        )}
        {selectedTags.map((tag) => (
          <Tag
            active
            key={tag}
            onClick={() =>
              setSelectedTags(selectedTags.filter((t) => t !== tag))
            }
          >
            {tag}
          </Tag>
        ))}
        {remainingTags.map((tag) => (
          <Tag
            key={tag}
            onClick={() => setSelectedTags([...selectedTags, tag])}
          >
            {tag}
          </Tag>
        ))}
      </FlipMove>
      <div className="pt-4 flex flex-col gap-4">
        {experiences.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
    </>
  );
}
