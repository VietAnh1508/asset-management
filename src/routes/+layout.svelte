<script lang="ts">
  import '../app.css';
  import { page } from '$app/state';

  const svelteLogo = "/svelte.svg";

  // Define navigation items
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/account', label: 'Account' },
    { href: '/report', label: 'Report' }
  ];

  // Function to check if a route is active
  function isActive(href: string, currentPath: string) {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  }
</script>

<main class="max-w-7xl mx-auto p-8">
  <nav class="flex items-center justify-between mb-8 bg-gray-50 rounded-lg p-4 shadow-sm">
    <div class="flex-1">
      <div class="flex items-center gap-2">
        <img src={svelteLogo} class="w-8 h-8" alt="Svelte Logo" />
        <span class="text-xl font-bold text-gray-800">My App</span>
      </div>
    </div>

    <div class="flex-1 flex justify-center">
      <ul class="flex list-none p-0 m-0 gap-2">
        {#each navItems as item}
          <li>
            <a 
              href={item.href} 
              class="block px-5 py-3 font-semibold no-underline rounded-md transition-colors {
                isActive(item.href, page.url.pathname)
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'text-gray-700 hover:bg-gray-100'
              }"
              aria-current={isActive(item.href, page.url.pathname) ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="flex-1 flex justify-end">
      <div class="flex items-center gap-2 text-gray-700">
        <svg class="text-gray-500" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-sm text-gray-500">user@example.com</span>
      </div>
    </div>
  </nav>

  <div class="p-4 bg-white rounded-lg shadow">
    <slot />
  </div>
</main>