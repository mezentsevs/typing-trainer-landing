<template>
    <button
        class="p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors duration-200 group"
        aria-label="Toggle theme"
        @click="toggleTheme">
        <div class="relative w-5 h-5">
            <!-- Sun (Light) -->
            <svg
                v-if="isDark"
                class="w-5 h-5 text-yellow-500 transform transition-transform duration-500 group-hover:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z"
                    clip-rule="evenodd" />
            </svg>

            <!-- Moon (Dark) -->
            <svg
                v-else
                class="w-5 h-5 text-cyan-400 transform transition-transform duration-500 group-hover:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z" />
            </svg>
        </div>
    </button>
</template>

<script setup lang="ts">
const isDark = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};

// Initialize theme from localStorage or system preference
onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    }
});
</script>
