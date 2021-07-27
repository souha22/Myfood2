<?php

namespace App\Controller;

use App\Entity\Ingredients;
use App\Repository\IngredientsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
    * @Route("/ingredients", name="ingredients")
    */
class IngredientsController extends AbstractController
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
     * @Route("/getAll", name="Ingredients_getAll", methods={"GET"})
     * @param IngredientsRepository $repository
     * @return Response
     */
    public function getAllAction(IngredientsRepository $repository): Response
    {
        return $this->restService->getAllAction($repository);
    }

    /**
     * @Route("/add", name="Ingredients_create", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function createAction(Request $request): Response
    {
        return $this->restService->createAction($request, "App\Entity\Ingredients");
    }

    /**
     * @Route("/update/{id}", name="Ingredients_update", methods={"PUT"})
     * @return Response
     */

    public function updateAction(Ingredients $Ingredients, Request $request): Response
    {
        return $this->restService->updateAction($Ingredients, $request);
    }

    /**
     * @Route("/delete/{id}", name="Ingredients_delete", methods={"DELETE"})
     * @param int $id
     * @param IngredientsRepository $repository
     * @return Response
     */

    public function deleteAction($id, IngredientsRepository $repository): Response
    {
        return $this->restService->deleteAction($id, $repository);
    }
}
