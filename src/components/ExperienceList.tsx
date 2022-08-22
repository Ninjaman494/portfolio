import { useState } from "react";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import cards from "../cards";
import Card from "./Card";
import Tag from "./Tag";
import "./styles.css";

// pick item, remaining fade out, picked slides to join selected, remainingTags fade in
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

  const timeout = 700;
  const classNames = "item";

  return (
    <>
      <div className="flex flex-row gap-2 -mr-3 pr-3 overflow-x-auto">
        <TransitionGroup component={null}>
          {selectedTags.map((tag) => (
            <CSSTransition
              key={tag + "-s"}
              classNames={classNames}
              timeout={timeout}
              addEndListener={() => {}}
            >
              <Tag
                active
                onClick={() =>
                  setSelectedTags(selectedTags.filter((t) => t !== tag))
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
              <Tag
                key={tag + "-r"}
                onClick={() => setSelectedTags([...selectedTags, tag])}
              >
                {tag}
              </Tag>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      <div className="pt-4 flex flex-col gap-4">
        {experiences.map((c) => (
          <Card key={c.title} card={c} />
        ))}
      </div>
    </>
  );
}
