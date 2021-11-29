import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useSession,signOut } from "next-auth/react";
import Input from "./Input";
import Post from "./Post";
import SignModal from './SignModal';

const Feed = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    );

    return (
        <div className="flex-grow border-1 border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className="text-[#d9d9d9] flex items-center justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
                <h2 className="text-lg sm:text-xl font-bold">Home</h2>
                 <div><SignModal/></div>
            </div>
            <Input />
            <div className="pb-72">
                {posts.map((post) => (
                    <Post key={post.id} id={post.id} post={post.data()} />
                ))}
            </div>
        </div>
    )
}

export default Feed;
