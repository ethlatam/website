import { useEditionContext } from "../context/EditionContext";

const useEdition = () => {
    const { edition, setEdition } = useEditionContext();

    return { edition, setEdition };
};

export default useEdition;