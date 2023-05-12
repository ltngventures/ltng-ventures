<script lang="ts">
    import BoltMarkOrangeIcon from '$lib/elements/icons/BoltMarkOrange.svelte';
    import BoltMarkOrangeDarkIcon from '$lib/elements/icons/BoltMarkOrangeDark.svelte';
    import BarsIcon from '$lib/elements/icons/Bars.svelte';
    import { Menu, MenuButton, MenuItems, MenuItem } from '@rgossiaux/svelte-headlessui';
    import { page } from '$app/stores';
</script>

<div
    class="w-full bg-slate-900/20 py-2 backdrop-blur-lg border-b border-slate-900 fixed top-0 left-1/2 -translate-x-1/2 z-40"
>
    <div class="flex flex-row gap-6 items-center justify-between max-w-6xl mx-auto px-4 md:px-8">
        <div class="flex flex-row items-end">
            <!-- <img src="/images/ltng.png" alt="Lightning Ventures" class="w-[133px] h-[74px]" /> -->
            <BoltMarkOrangeDarkIcon klass="w-12 h-16" />
            <a
                href="/"
                class="text-btcOrange font-bold tracking-tight uppercase leading-none font-josefin-sans-italic text-2xl"
            >
                Lightning<br />Ventures
            </a>
        </div>

        <!-- Desktop nav -->
        <nav
            class="hidden md:flex flex-row items-center gap-4 justify-center font-josefin-sans-italic text-base uppercase font-semibold text-btcOrange"
        >
            <a href="/about" class="hover {$page.url.pathname === '/about' ? 'active' : ''}">
                About
            </a>
            <a
                href="/portfolio"
                class="hover {$page.url.pathname === '/portfolio' ? 'active' : ''}"
            >
                Portfolio
            </a>
            <a
                href="/investors"
                class="hover {$page.url.pathname === '/investors' ? 'active' : ''}"
            >
                Join Us
            </a>
            <a href="/founders" class="hover {$page.url.pathname === '/founders' ? 'active' : ''}">
                Pitch Us
            </a>
            <a href="/team" class="hover {$page.url.pathname === '/team' ? 'active' : ''}">
                Team
            </a>
        </nav>

        <!-- Mobile nav -->
        <Menu class="md:hidden relative">
            <MenuButton>
                <BarsIcon klass="text-btcOrange w-6 h-6" />
            </MenuButton>
            <MenuItems
                class="absolute top-10 right-0 font-josefin-sans-italic uppercase bold text-btcOrange bg-slate-900 p-6 border border-slate-900 shadow-md flex flex-col gap-4 z-50"
            >
                <MenuItem>
                    <a href="/about" class="navLink">About</a>
                </MenuItem>
                <MenuItem>
                    <a href="/portfolio" class="navLink">Portfolio</a>
                </MenuItem>
                <MenuItem>
                    <a href="/investors" class="navLink">Join Us</a>
                </MenuItem>
                <MenuItem>
                    <a href="/founders" class="navLink">Pitch Us</a>
                </MenuItem>
                <MenuItem>
                    <a href="/team" class="navLink">Team</a>
                </MenuItem>
            </MenuItems>
        </Menu>
    </div>
</div>
