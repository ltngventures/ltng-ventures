// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        interface Investment {
            url: string;
            img: string;
            alt: string;
        }
        interface Teammate {
            name: string;
            img: string;
            title: string;
            description: string;
        }
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}

export {};
