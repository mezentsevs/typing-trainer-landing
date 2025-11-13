<template>
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div class="container mx-auto px-6 text-center z-10">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                <span>{{ currentTypingText }}</span>
                <span
                    class="typing-cursor ml-1 inline-block h-[1em] border-solid border-r-[0.05em] border-r-gray-800 dark:border-r-white align-middle" />
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {{ APP_SLOGAN }}
            </p>
            <PrimaryButton :href="APP_URL" class="mt-10 px-8 py-3">
                Start Training Now
            </PrimaryButton>
        </div>
    </section>
</template>

<script setup lang="ts">
import { APP_NAME, APP_SLOGAN, APP_URL } from '@/constants/app';

const currentTypingText: Ref<string> = ref('');

let typingAnimationInterval: ReturnType<typeof setInterval> | null = null;
let typingAnimationTimeout: ReturnType<typeof setTimeout> | null = null;
let currentTypingIndex: number = 0;
let isCurrentTypingTextDeleting: boolean = false;

const runTypingAnimation = (): void => {
    typingAnimationInterval = setInterval((): void => {
        if (!isCurrentTypingTextDeleting) {
            if (currentTypingIndex < APP_NAME.length) {
                currentTypingText.value += APP_NAME[currentTypingIndex];
                currentTypingIndex++;
            } else {
                typingAnimationTimeout = setTimeout((): void => {
                    isCurrentTypingTextDeleting = true;
                    typingAnimationTimeout = null;
                }, 2000);
            }
        } else {
            if (currentTypingText.value.length > 0) {
                currentTypingText.value = currentTypingText.value.slice(0, -1);
            } else {
                isCurrentTypingTextDeleting = false;
                currentTypingIndex = 0;
            }
        }
    }, 100);
};

onMounted((): void => {
    runTypingAnimation();
});

onUnmounted((): void => {
    if (typingAnimationInterval) {
        clearInterval(typingAnimationInterval);
    }

    if (typingAnimationTimeout) {
        clearTimeout(typingAnimationTimeout);
    }
});
</script>

<style scoped>
.typing-cursor {
    animation: blink-typing-cursor 0.75s step-end infinite;
}

@keyframes blink-typing-cursor {
    from,
    to {
        border-color: transparent;
    }
    50% {
        border-color: currentColor;
    }
}
</style>
