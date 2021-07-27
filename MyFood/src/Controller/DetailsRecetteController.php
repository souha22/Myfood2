<?php

namespace App\Controller;

use App\Entity\CategoryIngredient;
use App\Entity\DetailsRecette;
use App\Entity\Recette;
use App\Entity\User;
use App\Repository\CategoryIngredientRepository;
use App\Repository\DetailsRecetteRepository;
use App\Repository\RecetteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
    /**
     * @Route("/detailsRecette", name="detailsRecette")
    */
class DetailsRecetteController extends AbstractController
{

    /**
     * @var RestServiceController
     */
    private $restService;

    public function __construct(RestServiceController  $restService)
    {
        $this->restService = $restService;
    }


    /**
     * @Route("/getAll", name="CategoryIngredient_getAll", methods={"GET"})
     * @param CategoryIngredientRepository $repository
     * @return Response
     */
    public function getAllAction(CategoryIngredientRepository $repository): Response
    {
        return $this->restService->getAllAction($repository);
    }

    /**
     * @Route("/add", name="CategoryIngredient_create", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function createAction(Request $request): Response
    {
        return $this->restService->createAction($request, "App\Entity\CategoryIngredient");
    }

    /**
     * @Route("/update/{id}", name="CategoryIngredient_update", methods={"PUT"})
     * @return Response
     */

    public function updateAction(CategoryIngredient $CategoryIngredient, Request $request): Response
    {
        return $this->restService->updateAction($CategoryIngredient, $request);
    }

    /**
     * @Route("/delete/{id}", name="CategoryIngredient_delete", methods={"DELETE"})
     * @param int $id
     * @param CategoryIngredientRepository $repository
     * @return Response
     */

    public function deleteAction($id, CategoryIngredientRepository $repository): Response
    {
        return $this->restService->deleteAction($id, $repository);
    }
}
