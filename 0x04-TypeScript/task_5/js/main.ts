interface MajorCredits {
  credits: number;
  readonly _brandMajor: void;
}

interface MinorCredits {
  credits: number;
  readonly _brandMinor: void;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brandMajor: undefined,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brandMinor: undefined,
  };
}

const majorSubject1: MajorCredits = { credits: 3, _brandMajor: undefined };
const majorSubject2: MajorCredits = { credits: 4, _brandMajor: undefined };

const minorSubject1: MinorCredits = { credits: 1, _brandMinor: undefined };
const minorSubject2: MinorCredits = { credits: 2, _brandMinor: undefined };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log("Total Major Credits:", totalMajorCredits.credits);
console.log("Total Minor Credits:", totalMinorCredits.credits);
