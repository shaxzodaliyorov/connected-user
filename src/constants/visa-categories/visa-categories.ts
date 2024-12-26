import { VisaCategory } from "./types";

export const VISA_CATEGORIES: VisaCategory[] = [
  {
    category: "D-10-1",
    criteria: [
      {
        name: "1. Age",
        description: "Please make sure your age is correct.",
        options: [
          { label: "N/A", points: 0 },
          { label: "20-24", points: 10 },
          { label: "25-29", points: 15 },
          { label: "30-34", points: 20 },
          { label: "35-39", points: 15 },
          { label: "40-49", points: 5 },
        ],
      },
      {
        name: "2. Proficiency",
        description:
          "You must have graduated from the degree. Associate degrees studied abroad are not accepted.",
        options: [
          { label: "N/A", points: 0 },
          { label: "Associate Degree in Korea", points: 10 },
          { label: "Bachelor’s in Korea or abroad", points: 15 },
          { label: "Master’s in Korea or abroad", points: 20 },
          { label: "PhD in Korea or abroad", points: 15 },
        ],
      },
      {
        name: "3. Work Experience",
        notes: [
          "• Must be within the last 10 years.",
          "• Must be relevant experience to the visa.",
          "• Only a maximum of 15 points can be attained.",
        ],
        options: [
          { label: "N/A", points: 0 },
          { label: "1-2 years in Korea", points: 5 },
          { label: "3-4 years in Korea", points: 10 },
          { label: "Over 5 years in Korea", points: 15 },
          { label: "3-4 years abroad", points: 5 },
          { label: "5-6 years abroad", points: 10 },
          { label: "Over 7 years abroad", points: 15 },
        ],
      },
      {
        name: "4. Study Experience in Korea",
        options: [
          {
            label: "N/A",
            points: 0,
          },
          {
            label:
              "More than 3 years since graduating from a bachelor’s degree",
            points: 5,
          },
          {
            label: "Within 3 years of graduating from an associate degree",
            points: 30,
          },
          {
            label: "Within 3 years since graduating from a master’s degree",
            points: 15,
          },
          {
            label:
              "More than 3 years since graduating from an associate degree",
            points: 5,
          },
          {
            label: "Within 3 years since graduating from a master’s degree",
            points: 10,
          },
          {
            label: "Within 3 years of graduating from a bachelor’s degree",
            points: 30,
          },
          {
            label: "More than 3 years of graduating from a PhD degree",
            points: 15,
          },
        ],
      },
      {
        name: "5. Other Training and Education",
        description: "Max point is 5",
      },
      {
        name: "5.1. Graduate Research Exp. (D-2-5)",
        options: [
          { label: "N/A", points: 0 },
          { label: "12-18 months", points: 3 },
          { label: "More than 18 months", points: 5 },
        ],
      },
      {
        name: "5.2. Exchange Student (D-2-6)",
        options: [
          { label: "N/A", points: 0 },
          { label: "12-18 months", points: 3 },
          { label: "More than 18 months", points: 5 },
        ],
      },
      {
        name: "5.3. Public Inst. Training (D-4-2)",
        options: [
          { label: "N/A", points: 0 },
          { label: "12-18 months", points: 3 },
          { label: "More than 18 months", points: 5 },
        ],
      },
      {
        name: "5.4. Private Inst. Training (D-4-6)",
        options: [
          { label: "N/A", points: 0 },
          { label: "12-18 months", points: 3 },
          { label: "More than 18 months", points: 5 },
        ],
      },
      {
        name: "5.5. Language Training (D-4-1)",
        description: "0 point if over 18 months",
        options: [
          { label: "N/A", points: 0 },
          { label: "12-18 months", points: 3 },
          { label: "More than 18 months", points: 5 },
        ],
      },
      {
        name: "TOPIK or KIIP",
        description:
          "Scores are accepted in their valid peroid. (* Who have graduated from Korean university is all time accepted)",
        options: [
          { label: "N/A", points: 0 },
          { label: "Level 2 or higher", points: 5 },
          { label: "Level 3 or higher", points: 10 },
          { label: "Level 4 or higher", points: 15 },
          { label: "Level 5 or higher", points: 20 },
        ],
      },
      {
        name: "Additional Points",
        description:
          "Scores are accepted in their valid peroid. (* Who have graduated from Korean university is all time accepted)",
        options: [
          { label: "N/A", points: 0 },
          {
            label:
              "Recommendation for issuance of job-seeking visa by the relevant central administrative head and overseas diplomat",
            points: 20,
          },
          {
            label: `Professionals with experience in global corporate employment (individuals who have worked for at least one year within
the past 10 years in Fortune 500 companies listed within the last 3 years).`,
            points: 20,
          },
          {
            label:
              "Top university graduate (within the last 3 years has graduated from a Times World University Rankings top 200 university or QS World University Rankings top 500 university)",
            points: 20,
          },
          {
            label: `STEM degree holder(including
an associate degree from a Korean univeristy)`,
            points: 5,
          },
          {
            label: `High-income professional (with an annual
salary of at least $50,000 USD)`,
            points: 5,
          },
        ],
      },
      {
        name: "8. Violations",
        notes: [
          "On the combined amount of the disposal amount within 5 years from the date of application (excluding fines) and applying the combined score between items (duplicate mountain lodges)",
          "[Caution] If you receive a penalty within 3 years from the date of application, your stay permit will be restricted or restricted for 3 years according to the integrated standards for residence permit restrictions. Anyone who has been fined more than 3 million won within the past 30 years is subject to eligibility restrictions.",
        ],
      },
      {
        name: "8.1. Immigration Law Violation",
        options: [
          {
            label: "N/A",
            points: 0,
          },
          {
            label: "Fine more than 300.000 won",
            points: -20,
          },
          {
            label: "Fine more than 100.000won-less than 300.000 won",
            points: -10,
          },

          {
            label: "Fine more than 50.000 won-less than 100.000 won",
            points: -15,
          },
        ],
      },
      {
        name: "8.2. Criminal punishment history",
        options: [
          {
            label: "N/A",
            points: 0,
          },
          {
            label: "Fine more than 300.000 won",
            points: -30,
          },
          {
            label: "Fine more than 200.000 won-less than 300.000 won",
            points: -10,
          },

          {
            label: "Less than 200.000 won",
            points: -5,
          },
        ],
      },
    ],
  },
  {
    category: "E-7-4",
    criteria: [
      {
        name: "1 Annual Salary",
        description: "Please make sure your age is correct.",
        options: [
          { label: "Over 33 million won", points: 20 },
          { label: "Over 30 million won", points: 15 },
          { label: "More than 26 million won", points: 10 },
        ],
      },
      {
        name: "2. Highest Level of Education",
        description:
          "You must have graduated from the degree.Associate degrees studied abroad are not accepted.",
        options: [
          { label: "Possession of driver’s license", points: 20 },
          {
            label: "Possession of industrial engineer certificate",
            points: 15,
          },
          { label: "Possession technical certification", points: 10 },
          { label: "Pass skill verification", points: 10 },
        ],
      },
      {
        name: "Additional Information",
        description:
          "You can only score maximum of 70 points from this section.",
      },
      {
        name: "Education",
        notes: [
          "• Must be within the last 10 years.",
          "• Must be relevant experience to the visa.",
          "• Only a maximum of 15 points can be attained.",
        ],
        options: [
          {
            label: "Bachelor’s degree",
            points: 10,
          },
          {
            label: "Associate degree",
            points: 10,
          },
          {
            label: "High school graduate",
            points: 10,
          },
        ],
      },
      {
        name: "4. Age",
        options: [
          {
            label: "18-24",
            points: 20,
          },
          {
            label: "25-27",
            points: 20,
          },
          {
            label: "28-30",
            points: 14,
          },
          {
            label: "31-33",
            points: 11,
          },
          {
            label: "34-36",
            points: 8,
          },
          {
            label: "37-39",
            points: 5,
          },
        ],
      },
      {
        name: "5. TOPIK or KIIP",
        description: `Scores are accepted in their valid peroid.
(* Who have graduated from Korean university is all time accepted)`,
        options: [
          {
            label: "N/A",
            points: 0,
          },
          {
            label: "Level 2 or higher",
            points: 5,
          },
          {
            label: "Level 3 or higher",
            points: 10,
          },
          {
            label: "Level 4 or higher",
            points: 15,
          },
          {
            label: "Level 5 or higher",
            points: 20,
          },
        ],
      },
      {
        name: "6. Length of service",
        description:
          "Points are allocated by year according to length of service at the same company.",
        options: [
          {
            label: "N/A",
            points: 0,
          },
          {
            label: "1 year",
            points: 1,
          },
          {
            label: "2 year",
            points: 2,
          },
          {
            label: "3 year",
            points: 3,
          },
          {
            label: "4 year",
            points: 4,
          },
          {
            label: "5 year",
            points: 5,
          },
          {
            label: "6 year",
            points: 6,
          },
          {
            label: "7 year",
            points: 7,
          },
          {
            label: "8 year",
            points: 8,
          },
          {
            label: "9 year",
            points: 9,
          },
          {
            label: "10 year",
            points: 10,
          },
        ],
      },
      {
        name: "7. Holding Assets",
        description: "Domestic Periodic savings for more than 2 years",
        options: [
          {
            label: "Over 100 million won",
            points: 15,
          },
          {
            label: "Over 60 million won",
            points: 10,
          },
          {
            label: "Over 30 million won",
            points: 5,
          },
        ],
      },
      {
        name: "7.1. Holding Assets In Korea",
        options: [
          {
            label: "Over 100 million won",
            points: 20,
          },
          {
            label: "Over 80 million won",
            points: 15,
          },
          {
            label: "Over 50 million won",
            points: 10,
          },
        ],
      },
      {
        name: "5.4. Private Inst. Training (D-4-6)",
        options: [
          {
            label: "N/A",
            points: 0,
          },
          {
            label: "12-18 months",
            points: 3,
          },
          {
            label: "More than 18 months",
            points: 5,
          },
        ],
      },
      {
        name: "5.5. Language Training (D-4-1)",
        notes: ["• 0 point if over 18 months"],
        options: [
          {
            label: "N/A",
            points: 0,
          },
          {
            label: "12-18 months",
            points: 3,
          },
          {
            label: "More than 18 months",
            points: 5,
          },
        ],
      },
      {
        name: "7. Additional Points",
        options: [
          {
            label: "N/A",
            points: 0,
          },
          {
            label: `Recommendation for
issuance of job-seeking visa by the relevant central administrative head and overseas diplomat`,
            points: 20,
          },
          {
            label: `Professionals with experience in global corporate employment (individuals who have worked for at least one year within
the past 10 years in Fortune 500 companies listed within the last 3 years).`,
            points: 20,
          },
          {
            label:
              "Top university graduate (within the last 3 years has graduated from a Times World University Rankings top 200 university or QS World University Rankings top 500 university)",
            points: 20,
          },
          {
            label: `STEM degree holder(including
an associate degree from a Korean univeristy)`,
            points: 5,
          },
          {
            label: `High-income professional (with an annual salary of at least $50,000 USD)`,
            points: 5,
          },
        ],
      },
      {
        name: "8. Violations",
        notes: [
          "On the combined amount of the disposal amount within 5 years from the date of application (excluding fines) and applying the combined score between items (duplicate mountain lodges)",
          "[Caution] If you receive a penalty within 3 years from the date of application, your stay permit will be restricted or restricted for 3 years according to the integrated standards for residence permit restrictions. Anyone who has been fined more than 3 million won within the past 30 years is subject to eligibility restrictions.",
        ],
      },
      {
        name: "8.1. Immigration Law Violation",
        options: [
          {
            label: "N/A",
            points: 0,
          },
          {
            label: "Fine more than 300.000won",
            points: -30,
          },
          {
            label: "Fine more than 100.000won-less than 300.000won",
            points: -30,
          },
          {
            label: "Fine more than 50.000won-less than 100.000won",
            points: -15,
          },
        ],
      },
      {
        name: "8.2. Criminal punishment history",
        options: [
          {
            label: "Fine more than 300.000won",
            points: -30,
          },
          {
            label: "Fine more than 200.000won-less than 300.000won",
            points: -10,
          },
          {
            label: "Less than 200.000won",
            points: -5,
          },
        ],
      },
    ],
  },
  {
    category: "F-2-7",
    criteria: [
      {
        name: "TOPIK or KIIP",
        options: [
          { label: "N/A", points: 0 },
          { label: "Level 1", points: 3 },
          { label: "Level 2", points: 5 },
          { label: "Level 3", points: 10 },
          { label: "Level 4", points: 15 },
          { label: "Level 5 or higher", points: 20 },
        ],
      },
    ],
  },
];
