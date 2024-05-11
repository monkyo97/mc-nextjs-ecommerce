"use client";

import { redirect } from "next/navigation";
import FormSubmitButton from "../components/FormSubmitButton";
import { NotificacionToastComponent } from "../components/NotificationToast";
import { saveProduct } from "../actions/saveProduct";

async function addProduct(formData: FormData) {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    NotificacionToastComponent.getWarning("Complete todo");
    return;
  }

  const save = await saveProduct({ name, description, imageUrl, price });
  if (save.createdAt)
    NotificacionToastComponent.getSuccess("Registro creado exitósamente");

  redirect("/");
}

export default function AddProductPAge() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold"> Add Product </h1>
      <form className="grid-cols grid gap-y-4" action={addProduct}>
        <input
          required
          name="name"
          type="text"
          placeholder="Product name"
          className="input input-bordered w-full"
        />
        <textarea
          name="description"
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        ></textarea>
        <input
          required
          name="imageUrl"
          type="url"
          placeholder="Image"
          className="input input-bordered w-full"
        />
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className="input input-bordered w-full"
        />
        <FormSubmitButton className="btn-block">Add product</FormSubmitButton>
      </form>
    </div>
  );
}
