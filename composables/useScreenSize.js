export default () => {
    const width = ref(0);
    const height = ref(0);

    const onResize = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    };

    onMounted(() => {
        window.addEventListener("resize", onResize);
        onResize();
    });

    onUnmounted(() => {
        window.removeEventListener("resize", onResize);
    });

    return { width, height };
};
