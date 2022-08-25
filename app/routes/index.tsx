import { ActionArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { createIdea, getAllIdeas, Idea } from "~/db/idea.server";


type LoaderType = {
  ideas: Idea[];
}

type IntentType = "create" | "delete";

export async function loader() {
  const ideas = await getAllIdeas();
  return json({ ideas });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent") as IntentType;

  if(intent === "create") {
    const name = formData.get("name") as string;
    const idea = await createIdea(name);
    return json({ intent, idea });
  }
}

export default function Index() {

  const { ideas } = useLoaderData<LoaderType>();
  console.log(ideas);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Ideas
      </h1>
      <Form method="post">
        <input name="intent" value="create" type="hidden" />
        <input type="text" name="name" placeholder="Write a idea" />
        <button>Send</button>
      </Form>
    </div>
  );
}
