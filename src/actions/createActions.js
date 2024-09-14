import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../contacts";

export async function createAction() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function editContactAction({ request, params }) {
  //console.log(request, params);
  const formData = await request.formData();
  console.log("Form Data", formData);

  const updates = Object.fromEntries(formData); //=> return an object
  console.log("Updates", updates);
  await updateContact(params.id, updates);
  return redirect(`/contacts/${params.id}`);
}

export async function deleteContactAction({ params }) {
  await deleteContact(params.id);
  return redirect("/");
}

export async function updateContactFavorite({ request, params }) {
  const formData = await request.formData();
  return updateContact(params.id, {
    favorite: formData.get("favorite") === "true",
  });
}
