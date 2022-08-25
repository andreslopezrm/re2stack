import { ActionArgs, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { createIdea, getAllIdeas, Idea } from "~/db/idea.server";


type LoaderType = {
  ideas: Idea[];
}

export async function loader() {
  const ideas = await getAllIdeas();
  return json({ ideas });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const idea = await createIdea(name);
  return json({ idea });
}

export default function Index() {

  const { ideas } = useLoaderData() as LoaderType;
  const data = useActionData();
  const { state } = useTransition();

  const formRef = useRef<HTMLFormElement>(null);
  const isSubmiting = state === "submitting";

  useEffect(() => {
    if(data?.idea) {
      formRef?.current?.reset();
    }
  }, [data]);

  return (
    <div>
      <div className="max-w-screen-md  mx-auto">
        <h1 className="font-extrabold text-3xl mb-8 mt-6">Re2 Stack</h1>
        <Form method="post" className="w-full" ref={formRef}>
          <input name="intent" value="create" type="hidden" />
          <div className="flex gap-2 items-end">
            <div className="flex-1">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Write an idea</label>
              <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <button type="submit" disabled={isSubmiting} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save {isSubmiting ? "..." : null}</button>
          </div>
        </Form>
        <div className="overflow-x-auto mt-6 relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ideas.map(({ entityId, name }) => (
                      <tr className="bg-white border-b" key={entityId}>
                          <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                            {name}
                          </td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>

      </div>
    </div>
  );
}
