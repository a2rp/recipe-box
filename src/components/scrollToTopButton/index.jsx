import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import styled from "styled-components";

export default function ScrollToTopButton({ threshold = 50 }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > threshold);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    return (
        <Styled.Wrapper
            type="button"
            aria-label="Scroll to top"
            title="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-visible={visible}
        >
            <FiArrowUp />
        </Styled.Wrapper>
    );
}

const Styled = {
    Wrapper: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 1000;
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
        border: 1px solid #36516f;
        border-radius: 999px;
        color: #edf5ff;
        background: #142943;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: border-color 160ms ease, box-shadow 160ms ease, color 160ms ease;

        &[data-visible="true"] {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        &:hover {
            border-color: #66c7ff;
            box-shadow: 0 0 0 3px rgba(102, 199, 255, 0.12);
            color: #66c7ff;
        }
    `,
};
