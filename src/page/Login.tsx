import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../components/schemas/loginSchemas";
import Input from "../components/atoms/Input";
import PasswordInput from "../components/atoms/PasswordInput";
import Select from "../components/atoms/Select";
import TextArea from "../components/atoms/TextArea";
import * as z from "zod";

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Pendaftaran berhasil, silakan cek email");
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-md overflow-hidden">

        {/* HEADER */}
        <div className="bg-[#800000] px-5 py-4 text-center">
          <h1 className="text-white text-lg font-semibold tracking-wide uppercase">
            Form Pendaftaran Event
          </h1>
        </div>

        {/* DESKRIPSI (SUDAH RATA KIRI) */}
        <div className="px-5 pt-3">
          <p className="text-sm text-slate-500">
            Isi data di bawah untuk mendaftar
          </p>
        </div>

        {/* FORM */}
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <Input
              label="Nama Lengkap"
              placeholder="Masukkan nama"
              {...register("username")}
              error={errors.username?.message}
            />

            <Input
              label="Email"
              type="email"
              placeholder="contoh@email.com"
              {...register("email")}
              error={errors.email?.message}
            />

            <PasswordInput
              label="Password"
              placeholder="Minimal 8 karakter"
              {...register("password")}
              error={errors.password?.message}
            />

            <Select
              label="Kategori Event"
              {...register("category")}
              error={errors.category?.message}
              options={[
                { value: "talkshow", label: "IT Talkshow" },
                { value: "seminar", label: "IT Seminar" },
                { value: "workshop", label: "IT Workshop" },
              ]}
            />

            <TextArea
              label="Keterangan (Bio)"
              placeholder="Ceritakan sedikit tentang diri kamu"
              {...register("bio")}
              error={errors.bio?.message}
            />

            {/* BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 rounded-md text-white bg-[#800000] hover:bg-[#5a0000] transition disabled:opacity-50"
              >
                {isSubmitting ? "Loading..." : "Daftar"}
              </button>
            </div>

          </form>

          {/* FOOTER */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-400 text-center">
              *Data hanya digunakan untuk keperluan pendaftaran
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}