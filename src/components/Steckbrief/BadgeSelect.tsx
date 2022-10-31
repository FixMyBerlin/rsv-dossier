import React from 'react';
import { Button } from '~/components/Buttons';

type Props = {
  options: object;
  selected: string[];
  setSelected: any;
};
export const BadgeSelect: React.FC<Props> = ({
  options,
  selected,
  setSelected,
}) => {
  return (
    <div>
      <Button
        small
        outline={selected.length > 0}
        onClick={() => setSelected([])}
        className="mr-1.5 mb-1.5"
      >
        Alle
      </Button>
      {selected.sort().map((option) => (
        <Button
          small
          onClick={() => setSelected(selected.filter((x) => x !== option))}
          className="mr-1.5 mb-1.5"
        >
          {options[option]}
        </Button>
      ))}
      {Object.keys(options)
        .filter((option) => !selected.includes(option))
        .sort()
        .map((option) => {
          return (
            <Button
              small
              outline
              onClick={() => setSelected([...selected, option])}
              className="mr-1.5 mb-1.5"
            >
              {options[option]}
            </Button>
          );
        })}
    </div>
  );
};
