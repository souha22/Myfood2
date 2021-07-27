<?php

namespace App\Controller;

use App\Entity\Recette;
use App\Repository\RecetteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
    * @Route("/recette")
    */
class RecetteController extends AbstractController
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
     * @Route("/getAll", name="Recette_getAll", methods={"GET"})
     * @param RecetteRepository $repository
     * @return Response
     */
    public function getAllAction(RecetteRepository $repository): Response
    {
        return $this->restService->getAllAction($repository);
    }

    /**
     * @Route("/add", name="Recette_create", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function createAction(Request $request): Response
    {
        return $this->restService->createAction($request, "App\Entity\Recette");
    }

    /**
     * @Route("/update/{id}", name="Recette_update", methods={"PUT"})
     * @return Response
     */

    public function updateAction(Recette $Recette, Request $request): Response
    {
        return $this->restService->updateAction($Recette, $request);
    }

    /**
     * @Route("/delete/{id}", name="Recette_delete", methods={"DELETE"})
     * @param int $id
     * @param RecetteRepository $repository
     * @return Response
     */

    public function deleteAction($id, RecetteRepository $repository): Response
    {
        return $this->restService->deleteAction($id, $repository);
    }

}
