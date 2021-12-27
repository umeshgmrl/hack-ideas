import create from 'zustand';
import { supabase } from "./supabaseClient";

const initialuser = () => ({
    loggedIn: localStorage.getItem("loggedIn") || false
})

const useStore = create((set, get) => ({
    challenges: [],
    user: initialuser(),
    loadingItems: [],
    loginUser: () => {
        const loadingItems = [...get().loadingItems];
        loadingItems.push("login");
        set({ loadingItems });
        setTimeout(() => {
            localStorage.setItem("loggedIn", true);
            set({
                user: {
                    loggedIn: true
                },
                loadingItems: loadingItems.filter(el => el !== "login")
            })
        }, 1500);
    },

    logoutUser: () => {
        localStorage.setItem("loggedIn", "");
        set({ user: initialuser(), challenges: [] });
    },

    addChallenge: async (challenge, navigate) => {
        const loadingItems = [...get().loadingItems];
        loadingItems.push("addChallenge");
        set({ loadingItems });
        const { data, error } = await supabase
            .from('challenges')
            .insert(challenge);

        set(state => ({ challenges: [...state.challenges, ...data], loadingItems: loadingItems.filter(el => el !== "addChallenge") }));
        navigate("/home", { replace: true })
    },

    upvoteChallenge: async (id, votes) => {
        const challenges = [...get().challenges];
        const challengeIndex = challenges.findIndex(el => el.id === id);
        challenges[challengeIndex].votes = challenges[challengeIndex].votes + 1;

        const { data, error } = await supabase
            .from('challenges')
            .update({ votes })
            .match({ id: id });
        set({ challenges });
    },

    getChallenges: async () => {
        const loadingItems = [...get().loadingItems];
        loadingItems.push("challenges");
        set({ loadingItems });
        const { data: challenges } = await supabase.from("challenges").select();
        set({ challenges, loadingItems: loadingItems.filter(el => el !== "challenges") });
    }
}))

export default useStore;