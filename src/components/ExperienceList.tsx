import { useState } from "react";
import FlipMove from "react-flip-move";
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

  return (
    <>
      {/** @ts-ignore outdated prop type doesn't include children */}
      <FlipMove className="flex flex-row gap-2 -mr-3 pr-3 overflow-x-auto">
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
        {experiences.map((c) => (
          <Card key={c.title} card={c} />
        ))}
      </div>
    </>
  );
}
