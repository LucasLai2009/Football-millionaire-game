
export const PRIZE_LADDER: number[] = [
    100, 200, 300, 500, 1000,
    2000, 4000, 8000, 16000, 32000,
    64000, 125000, 250000, 500000, 1000000
];

export interface DraftMilestone {
    score: number;
    prize: number;
}

export const DRAFT_MILESTONES: DraftMilestone[] = [
    { score: 300, prize: 10_000 },
    { score: 600, prize: 20_000 },
    { score: 1000, prize: 50_000 },
    { score: 1500, prize: 100_000 },
    { score: 2100, prize: 150_000 },
    { score: 2700, prize: 200_000 },
    { score: 3300, prize: 300_000 },
    { score: 4000, prize: 400_000 },
    { score: 4800, prize: 500_000 },
    { score: 5700, prize: 750_000 },
    { score: 6600, prize: 1_100_000 },
];
