export function getRandomSubarray(arr: unknown[], size: number): unknown[] {
    const shuffled = arr.slice(0);
    let i = arr.length;
    let temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

// Generalized form helpers
export function setFormSubmitted(event: Event) {
    const button = event.target as HTMLElement;
    const form = button.parentElement?.parentElement;
    form?.classList.add('submitted');
}
