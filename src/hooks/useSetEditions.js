import { useEditionContext } from "../context/EditionContext";

const useSetEdition = () => {
    const { setEdition } = useEditionContext();

    return setEdition;
};

export default useSetEdition;