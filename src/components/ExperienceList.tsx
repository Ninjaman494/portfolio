import { useState } from "react";
import cards from "../cards";
import Card from "./Card";

// Default all tags
// Once one tag is selected, tags = [selectedTag]
// Selected more tags adds it to `tags`
// Selected X resets `tags` to all tags

const allExperiences = [...cards.projects, ...cards.work];
// Use Set to remove duplicates
const allTags = allExperiences.reduce(
  (prev, curr) => new Set([...prev, ...curr.tags]),
  new Set<string>()
);

export default function ExperienceList() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const experiences =
    selectedTags.length === 0
      ? allExperiences
      : allExperiences.filter(
          ({ tags }) => !selectedTags.some((t) => !tags.includes(t))
        );

  const remainingTags = [
    ...experiences.reduce(
      (prev, { tags }) => new Set([...prev, ...tags]),
      new Set<string>()
    ),
  ].filter((tag) => !selectedTags.includes(tag));

  return (
    <>
      <div className="flex flex-row gap-2 -mr-3 pr-3 overflow-x-auto">
        {selectedTags.length > 0 && (
          <button
            className="bg-gray-400 px-2 py-1 rounded-full text-sm text-gray-50 whitespace-nowrap"
            onClick={() => setSelectedTags([])}
          >
            X
          </button>
        )}
        {[...selectedTags].map((tag) => (
          <button
            key={tag}
            className="bg-gray-600 px-2 py-1 rounded-full text-sm text-gray-50 whitespace-nowrap"
            onClick={() =>
              setSelectedTags(selectedTags.filter((val) => val !== tag))
            }
          >
            {tag}
          </button>
        ))}
        {remainingTags.map((tag) => (
          <button
            key={tag + "r"}
            className="bg-gray-400 px-2 py-1 rounded-full text-sm text-gray-50 whitespace-nowrap"
            onClick={() => setSelectedTags([...selectedTags, tag])}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="pt-4 flex flex-col gap-4">
        {experiences.map((c) => (
          <Card key={c.title} card={c} />
        ))}
      </div>
    </>
  );
}
