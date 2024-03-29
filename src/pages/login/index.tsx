import Logo from "../../assets/logo.svg";
import { Container } from "../../components/container";
import { FormMethod, Link } from "react-router-dom";

import { Input } from "../../components/input";

// Form Validation
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email("Insira um e-mail válido")
    .nonempty("O campo e-mail é obrigatório!"),
  password: z.string().nonempty("O campo senha é obrigatório!"),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <div className="bg-white rounded-lg flex flex-col items-center w-3/4 p-8">
        <div className="w-48 min-h-12 flex justify-center items-center flex-col gap-4">
          <Link to="/" className="mb-6 max-w-sm w-full">
            <img src={Logo} alt="Logo do site" className="w-full" />
          </Link>
        </div>

        <form className="max-w-xl w-full p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <Input
              type="email"
              placeholder="Digite seu e-mail..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>

          <div className="mb-3">
            <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button
            type="submit"
            className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium"
          >
            Acessar
          </button>
        </form>
      </div>
    </Container>
  );
}
